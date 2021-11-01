from django.db import models

DIFFICULTY = [
    ('easy', 'easy'),
    ('medium', 'medium'),
    ('hard', 'hard')
]

class Recipie(models.Model):
    #name
    name = models.CharField(max_length=100)
    #ingridients
    ingridients = models.CharField(max_length=300)
    #difficulty
    difficulty = models.CharField(max_length=6, choices=DIFFICULTY)
    #preparation
    preparation = models.CharField(max_length=1000)
    #image
    #image = models.ImageField(upload_to=user_directory_path)

    def __str__(self):
        return self.name