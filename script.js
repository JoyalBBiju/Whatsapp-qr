function generateQRCode() {
    // Get the input values
    const phoneNumber = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Ensure the phone number starts with the country code
    const formattedPhoneNumber = phoneNumber.startsWith("+") ? phoneNumber : "+" + phoneNumber;

    // Encode the message to be URI-friendly
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

    // Generate the QR code on a hidden canvas
    const qrCodeElement = document.createElement('div');
    new QRCode(qrCodeElement, {
        text: whatsappURL,
        width: 256,
        height: 256
    });

    // Get the canvas from the generated QR code and convert it to a data URL
    const qrCanvas = qrCodeElement.querySelector('canvas');
    const qrDataUrl = qrCanvas.toDataURL("image/png");

    // Set the data URL as the src of the image tag
    document.getElementById("qrcode").src = qrDataUrl;
}
