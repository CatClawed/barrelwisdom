# Generated by Django 3.2.9 on 2021-12-12 14:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('traits_a22', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='trait',
            options={'ordering': ['index']},
        ),
    ]
