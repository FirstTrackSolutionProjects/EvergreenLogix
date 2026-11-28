const API_URL = import.meta.env.VITE_APP_API_URL;

const triggerSinglePodDownload = async (pod, orderId, index) => {
  if (!pod) return;

  if (pod.startsWith("http://") || pod.startsWith("https://")) {
    try {
      const res = await fetch(pod);
      if (!res.ok) throw new Error("Failed to fetch POD file");
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const mimeExt = blob.type?.split("/")?.[1]?.split(";")?.[0];
      const ext = mimeExt && mimeExt !== "octet-stream" ? mimeExt : "pdf";
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `POD_${orderId}_${index + 1}.${ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(pod, "_blank", "noopener,noreferrer");
    }
    return;
  }

  const href = pod.startsWith("data:") ? pod : `data:application/pdf;base64,${pod}`;
  const link = document.createElement("a");
  link.href = href;
  link.download = `POD_${orderId}_${index + 1}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadShipmentPodService = async (orderId) => {
  if (!orderId) {
    throw new Error("Order ID is required");
  }

  const response = await fetch(
    `${API_URL}/shipment/domestic/${encodeURIComponent(orderId)}/download-pod`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ orderId }),
    }
  );

  const result = await response.json();
  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "Failed to download POD");
  }

  const pods = result?.data?.pods || [];
  for (let i = 0; i < pods.length; i += 1) {
    await triggerSinglePodDownload(pods[i], orderId, i);
  }

  return pods;
};

export default downloadShipmentPodService;
