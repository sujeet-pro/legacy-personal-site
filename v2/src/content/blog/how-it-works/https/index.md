---
title: How HTTPS Works
description: All the steps involved, before first byte is shared
isDraft: true
isContentSummaryOpen: true
image: ../../hello/cover-hello.jpg
imageCredit: ADD HERE
publishedOn: 2023-09-01
lastUpdatedOn: 2023-09-01
topics:
  - performance
---

## TODO

- SSL is older technology, that is replaced by TLS

## Steps For HTTPS

### Hello

Steps:

1. Client Hello (C -> S)
2. Server Hello (C <- S)

For Client Hello:

- TLS Version, the client supports
- Supported Cipher Suits
- Client random - a string of random bytes

For Server Hello:

- Select Cipher Suit
- SSL/TLS Certificate (This has public key of server)
- Server Random: Randomly selected prime number

### Certificate and Key Exchange

Server Steps:

3. Certificate (C <- S)
4. Server Key Exchange (C <- S)
5. Server Hello Done (C <- S)

What happend:

- The server sends its SSL certificate and intermediate certificate, along with the associated public keys, to the browser.
- the browser will verify the SSL certificate based on its digital signature and the root certificates the browser trusts.

At this point, the connection can only be used securely one way (browser –> server)

### Setting Up Symmetric Encryption

Using Symmetric Key for encryption is more efficient, so Server and Browser will select a symmetric key for encryption

6. Client Key Exchange (C -> S)
7. Change Cipher Spec (C -> S)
8. Finished (C -> S)
9. Change Cipher Spec (C <- S)
10. Finished (C <- S)

What happend:

- Creates a pre-master key
- Ecrypts it with Server's public key
- Sends to the server

## Encryption Recap

Encryption could be:

- Symmetric: Use the same key to encrypt or decrypt the information
- Assymetric: Use different key to encrypt and decrypt
  - Public Key, To encrypt
  - Private Key, To decrypt

CA Issues the Digital Certificate
Digital Certificate have - Digital Signature

### PKI

- Digital certificates (i.e. SSL certificates).
- Public & private key pairs.
- Certificate authorities.
- Digital signatures.
- Root stores.

## Glossary

- TLS: Transport Layer Security
- SSL: Secure Socket Layer
- PKI - Public Key Infrastructure
- CA: Certificate Authorities - Issues Certificate
