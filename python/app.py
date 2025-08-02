from flask import Flask, request, jsonify
from email.message import EmailMessage
import smtplib
import os
from dotenv import load_dotenv

# Cargar variables del archivo .env
load_dotenv()

app = Flask(__name__, static_folder='.', static_url_path='')
app.secret_key = os.getenv("SECRET_KEY")

@app.route('/')
def home():
    # Esto carga tu HTML principal, por ejemplo contactame.html
    return app.send_static_file('contactame.html')

@app.route('/enviar', methods=['POST'])
def enviar():
    # Obtener datos del formulario
    nombre = request.form.get('nombre')
    apellido = request.form.get('apellido')
    correo = request.form.get('correo')
    mensaje = request.form.get('mensaje')

    # Leer variables del archivo .env
    remitente = os.getenv("EMAIL_USER")
    contraseña = os.getenv("EMAIL_PASSWORD")
    receptor = remitente  # Puedes cambiarlo si quieres recibir en otro correo

    # Crear el mensaje de correo
    email = EmailMessage()
    email['From'] = remitente
    email['To'] = receptor
    email['Subject'] = '📩 Nuevo mensaje desde tu portafolio web'
    email.set_content(f'''
    Has recibido un nuevo mensaje:

    🧑 Nombre: {nombre}
    📧 Correo: {correo}

    💬 Mensaje:
    {mensaje}
    ''')

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(remitente, contraseña)
            smtp.send_message(email)
        return jsonify({'status': 'ok'}), 200
    except Exception as e:
        print(f"Error al enviar: {e}")
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
