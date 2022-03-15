from PIL import Image

image = Image.open('Screenshot from 2022-03-15 12-15-00.png')#.convert('RGBA')
# new_image = Image.new("RGBA", image.size, "WHITE")
# new_image.paste(image, (0, 0), image)
# new_image.convert('RGB').save('test.jpg', "JPEG")
# new_image.save('svm.webp','webp', quality = 1)
image.save('cpu.webp','webp', quality = 50)