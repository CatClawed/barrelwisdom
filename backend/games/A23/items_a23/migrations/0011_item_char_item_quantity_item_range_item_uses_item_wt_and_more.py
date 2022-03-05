# Generated by Django 4.0.3 on 2022-03-04 21:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('misc_a23', '0003_alter_character_char_en_alter_character_char_ja_and_more'),
        ('items_a23', '0010_remove_effectlines_effects_book_note_effectdata_line'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='char',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='synthchar', to='misc_a23.character'),
        ),
        migrations.AddField(
            model_name='item',
            name='quantity',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='range',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='uses',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='wt',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('ing', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ingredients', to='items_a23.item')),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='items_a23.item')),
            ],
        ),
    ]
