# Generated by Django 4.1.4 on 2023-03-02 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items_a18', '0010_masteryline'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalyst',
            name='used_by',
            field=models.ManyToManyField(related_name='used_by', to='items_a18.item'),
        ),
    ]