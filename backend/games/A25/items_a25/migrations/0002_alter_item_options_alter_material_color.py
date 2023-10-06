# Generated by Django 4.2.5 on 2023-10-06 08:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('misc_a25', '0006_alter_name_text_en'),
        ('items_a25', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='item',
            options={'ordering': ['-rarity']},
        ),
        migrations.AlterField(
            model_name='material',
            name='color',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='mat_color', to='misc_a25.filterable'),
        ),
    ]
