# Generated by Django 4.1.4 on 2023-01-30 00:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('effects_traits_a21', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='effect',
            name='child',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='effects_traits_a21.effect'),
        ),
        migrations.AddField(
            model_name='effect',
            name='forge',
            field=models.BooleanField(default=False),
        ),
    ]
