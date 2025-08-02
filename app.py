from flask import Flask, render_template, request, jsonify
from email.message import EmailMessage
import smtplib
import os
from dotenv import load_dotenv

# Cargar las variables del archivo .env
load_dotenv()

# Crear la app Flask
app = Flask(__name__, static_folder='static', template_folder='templates')
app.secret_key = os.getenv("SECRET_KEY")

# Rutas de las páginas del portafolio
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sobremi')
def sobremi():
    return render_template('sobremi.html')

@app.route('/galeria')
def galeria():
    return render_template('galeria.html')

@app.route('/proyectos')
def proyectos():
    return render_template('proyectos.html')

@app.route('/miswebs')
def miswebs():
    return render_template('miswebs.html')

@app.route('/contactame')
def contactame():
    return render_template('contactame.html')

# Ruta para enviar el formulario de contacto
@app.route('/enviar', methods=['POST'])
def enviar():
    nombre = request.form.get('nombre')
    correo = request.form.get('correo')
    mensaje = request.form.get('mensaje')

    remitente = os.getenv("EMAIL_USER")
    contraseña = os.getenv("EMAIL_PASSWORD")
    receptor = remitente  # Puedes cambiarlo si deseas enviar a otro correo

    print("EMAIL_USER:", os.getenv("EMAIL_USER"))
    print("EMAIL_PASSWORD:", os.getenv("EMAIL_PASSWORD"))


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

# Ejecutar la aplicación
if __name__ == '__main__':
    app.run(debug=True)
