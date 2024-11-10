const express = require('express');
const bodyParser = require('body-parser');
const QRCodeReader = require('qrcode-reader');
const Jimp = require('jimp'); // Biblioteca para manipulação de imagens
const request = require('request'); // Para fazer o download da imagem da URL

const app = express();
app.use(bodyParser.json());

// Função para gerar o link do mapa
const generateMapLink = (coordinates) => {
  return `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
};

// Função para encontrar o ponto de coleta
const findRecyclingPoint = (productInfo) => {
    // Lógica para encontrar o ponto de coleta mais próximo
    return {
        name: 'Ponto de Coleta Exemplo',
        address: 'Rua Exemplo, 123, São Paulo, SP',
        coordinates: { lat: -23.55052, lng: -46.633308 }
    };
};

// Endpoint /scan
app.post('/scan', async (req, res) => {
    const { imageUrl } = req.body;

    try {
        // Baixa a imagem se a URL for remota
        const image = await Jimp.read(imageUrl);
        const qr = new QRCodeReader();

        qr.callback = (err, value) => {
            if (err) {
                return res.status(400).json({ error: 'Erro ao ler o QR code' });
            }

            const productInfo = value.result;
            // Aqui você pode adicionar lógica para buscar o ponto de coleta mais próximo
            const recyclingPoint = findRecyclingPoint(productInfo);

            // Gera o link do mapa
            const mapLink = generateMapLink(recyclingPoint.coordinates);

            res.json({
                productInfo,
                recyclingPoint,
                mapLink
            });
        };

        qr.decode(image.bitmap);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao processar a imagem' });
    }
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
