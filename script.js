function generateQRCode() {
  const input = document.getElementById("textInput").value;
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";

  if (!input) {
    alert("Digite algo para gerar o QR Code.");
    return;
  }

  QRCode.toCanvas(document.createElement("canvas"), input, function (error, canvas) {
    if (error) {
      console.error(error);
      return;
    }

    canvas.id = "qrcode-canvas";
    qrcodeContainer.appendChild(canvas);

    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Baixar QR Code";
    downloadBtn.style.cssText = `
      margin-top: 1rem;
      display: block;
      margin-left: auto;
      margin-right: auto;
    `;
    downloadBtn.onclick = () => {
      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };

    qrcodeContainer.appendChild(downloadBtn);
  });
}
