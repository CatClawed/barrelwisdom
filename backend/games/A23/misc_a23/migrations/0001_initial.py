# Generated by Django 4.0.2 on 2022-03-02 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(max_length=10)),
                ('char_en', models.CharField(max_length=10)),
                ('char_ja', models.CharField(max_length=10)),
                ('char_ko', models.CharField(max_length=10)),
                ('char_sc', models.CharField(max_length=10)),
                ('char_tc', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(max_length=30)),
                ('shop_en', models.CharField(max_length=30)),
                ('shop_ja', models.CharField(max_length=30)),
                ('shop_ko', models.CharField(max_length=30)),
                ('shop_sc', models.CharField(max_length=30)),
                ('shop_tc', models.CharField(max_length=30)),
            ],
        ),
    ]
