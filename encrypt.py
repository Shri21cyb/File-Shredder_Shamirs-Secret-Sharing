# encrypt.py
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
import base64

# AES Encryption Function
def encrypt_file(input_file, output_file, key):
    cipher = AES.new(key, AES.MODE_EAX)
    with open(input_file, 'rb') as f:
        data = f.read()
    ciphertext, tag = cipher.encrypt_and_digest(data)
    
    # Save ciphertext and cipher parameters
    with open(output_file, 'wb') as f:
        f.write(cipher.nonce + tag + ciphertext)

# AES Decryption Function
def decrypt_file(input_file, output_file, key):
    with open(input_file, 'rb') as f:
        nonce, tag, ciphertext = f.read(16), f.read(16), f.read()
    cipher = AES.new(key, AES.MODE_EAX, nonce=nonce)
    
    # Decrypt and write to output file
    data = cipher.decrypt_and_verify(ciphertext, tag)
    with open(output_file, 'wb') as f:
        f.write(data)

# AES Key Generator
def generate_key():
    return get_random_bytes(32)  # 256-bit key

