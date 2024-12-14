import React, { useState, useRef } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  CircularProgress,
  TextField,
  Card,
  CardContent,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { processImage } from '../services/api';

function Dashboard() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const fileInputRef = useRef();

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await processImage(formData);
      setResult(response.data.text);
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Image to Text Converter
      </Typography>

      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {/* Upload Section */}
        <Paper sx={{ p: 3, flex: 1, minWidth: '300px' }}>
          <input
            type="file"
            accept="image/*"
            hidden
            ref={fileInputRef}
            onChange={handleFileSelect}
          />
          
          <Box
            sx={{
              border: '2px dashed #ccc',
              borderRadius: 2,
              p: 3,
              textAlign: 'center',
              cursor: 'pointer',
              '&:hover': { borderColor: 'primary.main' },
            }}
            onClick={() => fileInputRef.current.click()}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                style={{ maxWidth: '100%', maxHeight: '300px' }}
              />
            ) : (
              <>
                <CloudUpload sx={{ fontSize: 60, color: 'text.secondary' }} />
                <Typography variant="h6" color="text.secondary">
                  Click or drag to upload image
                </Typography>
              </>
            )}
          </Box>

          <Button
            fullWidth
            variant="contained"
            onClick={handleUpload}
            disabled={!file || loading}
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Process Image'}
          </Button>
        </Paper>

        {/* Result Section */}
        <Paper sx={{ p: 3, flex: 1, minWidth: '300px' }}>
          <Typography variant="h6" gutterBottom>
            Extracted Text
          </Typography>
          <TextField
            multiline
            rows={12}
            fullWidth
            value={result}
            variant="outlined"
            placeholder="Extracted text will appear here..."
          />
          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigator.clipboard.writeText(result)}
            sx={{ mt: 2 }}
            disabled={!result}
          >
            Copy Text
          </Button>
        </Paper>
      </Box>

      {/* History Section */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Recent Conversions
      </Typography>
      <Card>
        <CardContent>
          <Typography color="text.secondary">
            Your recent conversions will appear here
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Dashboard; 