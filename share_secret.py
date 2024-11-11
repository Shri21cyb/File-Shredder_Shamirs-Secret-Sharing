# share_secret.py
#This module uses Shamir's Secret Sharing to split and reconstruct the AES key.

from secretsharing import PlaintextToHexSecretSharer

# Split AES Key \
def split_key(key, n, k):
    key_hex = key.hex()  # Convert to hex for sharing
    print("Key (Hex): {key_hex}, Shares: {n}, Threshold:{k}") 
    shares = PlaintextToHexSecretSharer.split_secret(key_hex, n, k)
    return shares


def reconstruct_key(shares):
    key_hex = PlaintextToHexSecretSharer.recover_secret(shares)
    return bytes.fromhex(key_hex)


"""
key = b"ThisIsA16ByteKey"
share=split_key(key,4,4)
print("SHares:",share)
print(reconstruct_key(share))
"""
