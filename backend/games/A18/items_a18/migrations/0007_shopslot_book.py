# Generated by Django 4.1.4 on 2023-03-02 05:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('misc_a18', '0004_remove_basictext_char1_remove_basictext_char2_and_more'),
        ('items_a18', '0006_item_char1_item_char2_item_char3_item_char4'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShopSlot',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('index', models.IntegerField()),
                ('random', models.BooleanField(default=False)),
                ('item', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='items_a18.item')),
                ('shop', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='misc_a18.shop')),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note', models.CharField(blank=True, max_length=200, null=True)),
                ('book', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='book', to='items_a18.item')),
                ('recipes', models.ManyToManyField(related_name='recipes', to='items_a18.item')),
            ],
        ),
    ]