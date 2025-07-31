from flask import Flask, request, jsonify, render_template
import smtplib
from email.message import EmailMessage

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return app.send_static_file('contactame.html')  # Tu archivo HTML principal

@app.route('/enviar', methods=['POST'])
def enviar():
    nombre = request.form.get('nombre')
    correo = request.form.get('correo')
    mensaje = request.form.get('mensaje')

    if not nombre or not correo or not mensaje:
        return jsonify({'status': 'error', 'message': 'Campos incompletos'}), 400

    # Configura tu correo (con contraseña de aplicación)
    remitente = 'rousse11282001@gmail.com'
    receptor = 'rousse11282001@gmail.com'
    contraseña = 'CONTRASEÑA-DE-APLICACION'

    email = EmailMessage()
    email['From'] = remitente
    email['To'] = receptor
    email['Subject'] = 'Mensaje desde tu portafolio'
    email.set_content(f'Nombre: {nombre}\nCorreo: {correo}\nMensaje:\n{mensaje}')

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(remitente, contraseña)
            smtp.send_message(email)
        return jsonify({'status': 'ok'})
    except Exception as e:
        print('Error al enviar:', e)
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
