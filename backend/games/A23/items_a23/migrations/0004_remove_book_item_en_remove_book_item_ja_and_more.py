# Generated by Django 4.0.2 on 2022-03-02 04:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items_a23', '0003_alter_effectlines_elem_alter_item_item_en_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='item_en',
        ),
        migrations.RemoveField(
            model_name='book',
            name='item_ja',
        ),
        migrations.RemoveField(
            model_name='book',
            name='item_ko',
        ),
        migrations.RemoveField(
            model_name='book',
            name='item_sc',
        ),
        migrations.RemoveField(
            model_name='book',
            name='item_tc',
        ),
        migrations.AddField(
            model_name='book',
            name='book_en',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='book',
            name='book_ja',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='book',
            name='book_ko',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='book',
            name='book_sc',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='book',
            name='book_tc',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
    ]
