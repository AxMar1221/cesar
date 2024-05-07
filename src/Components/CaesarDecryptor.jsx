import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const CaesarDecryptor = () => {

  const [mensajeCifrado, setMensajeCifrado] = useState('');
  const [clave, setClave] = useState(0);
  const [mensajeDescifrado, setMensajeDescifrado] = useState('');

  const descifrarMensaje = () => {
    const abecedario = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const longitudAbecedario = abecedario.length;

    let mensajeDescifrado = '';

    for (let i = 0; i < mensajeCifrado.length; i++) {
      const char = mensajeCifrado[i].toUpperCase();
      if (abecedario.includes(char)) {
        const index = (abecedario.indexOf(char) - clave + longitudAbecedario) % longitudAbecedario;
        mensajeDescifrado += abecedario[index];
      } else {
        mensajeDescifrado += char;
      }
    }

    setMensajeDescifrado(mensajeDescifrado);
  };

  return (
    <div>
      <TextField
        label="Mensaje cifrado"
        value={mensajeCifrado}
        onChange={(e) => setMensajeCifrado(e.target.value)}
      />
      <TextField
        label="Clave"
        type="number"
        value={clave}
        onChange={(e) => setClave(parseInt(e.target.value, 10))}
      />
      <Button variant="contained" onClick={descifrarMensaje}>
        Descifrar
      </Button>
      <div>
        <strong>Mensaje Descifrado:</strong> {mensajeDescifrado}
      </div>
    </div>
  );
};
