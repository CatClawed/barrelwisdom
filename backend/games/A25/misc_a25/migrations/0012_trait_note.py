# Generated by Django 4.2.6 on 2023-10-28 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('misc_a25', '0011_remove_trait_trans'),
    ]

    operations = [
        migrations.AddField(
            model_name='trait',
            name='note',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
