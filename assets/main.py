from PIL import Image

imgfile = Image.open('IMG_20200819_212124.jpg').convert('RGB')
imgfile.save('akekon.webp','webp', quality = 1)