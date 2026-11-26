const API_URL = import.meta.env.VITE_APP_API_URL;

export const getInvoiceAutoFillUploadUrlService = async (filename) => {
  const response = await fetch(`${API_URL}/invoice-auto-fill/get-upload-url`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({ filename }),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to get invoice upload URL");
  }

  return result.data; // { url, fields }
};

export const uploadInvoiceToS3PostService = async (url, fields, file) => {
  const formData = new FormData();
  Object.entries(fields).forEach(([k, v]) => {
    formData.append(k, v);
  });
  formData.append("file", file);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload invoice file to S3");
  }
};

export const getInvoiceAutoFillStatusService = async (key) => {
  const response = await fetch(
    `${API_URL}/invoice-auto-fill/status?key=${encodeURIComponent(key)}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }
  );

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Failed to get invoice extraction status");
  }

  return result;
};
