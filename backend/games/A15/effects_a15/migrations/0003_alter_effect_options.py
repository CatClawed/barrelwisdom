# Generated by Django 3.2.9 on 2021-12-12 14:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('effects_a15', '0002_auto_20210605_2210'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='effect',
            options={'ordering': ['index']},
        ),
    ]
