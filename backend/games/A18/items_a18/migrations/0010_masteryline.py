# Generated by Django 4.1.4 on 2023-03-02 05:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('misc_a18', '0005_itemmastery'),
        ('items_a18', '0009_ingredient_effectlines_effectdata'),
    ]

    operations = [
        migrations.CreateModel(
            name='MasteryLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.IntegerField()),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='items_a18.item')),
                ('masteries', models.ManyToManyField(to='misc_a18.itemmastery')),
            ],
            options={
                'ordering': ['item', 'level'],
            },
        ),
    ]
