# Generated by Django 4.2.5 on 2023-10-17 22:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('misc_a25', '0010_delete_update_remove_trait_timestamp'),
        ('chara_a25', '0006_remove_character_timestamp_remove_memoria_timestamp'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='limit',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='misc_a25.desc'),
        ),
    ]
