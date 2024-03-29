# Generated by Django 4.2.7 on 2024-02-04 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chara_a25', '0013_character_gbl_memoria_gbl'),
        ('items_a25', '0014_item_note'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='gbl',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='recipepage',
            name='gbl',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='LatestUpdateGBL',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('characters', models.ManyToManyField(to='chara_a25.character')),
                ('items', models.ManyToManyField(to='items_a25.item')),
                ('memoria', models.ManyToManyField(to='chara_a25.memoria')),
            ],
            options={
                'ordering': ['-time'],
            },
        ),
    ]
