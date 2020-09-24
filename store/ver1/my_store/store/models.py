from django.db import models

class Products(models.Model):
    name = models.CharField(max_length=120)
    date = models.DateField()
    price = models.FloatField()

    def __str__(self):
        return self.name