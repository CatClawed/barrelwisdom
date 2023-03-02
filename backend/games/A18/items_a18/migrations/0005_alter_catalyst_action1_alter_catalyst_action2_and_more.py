# Generated by Django 4.1.4 on 2023-03-01 19:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('items_a18', '0004_catalyst_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catalyst',
            name='action1',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='action1', to='items_a18.catalystaction'),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='action2',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='action2', to='items_a18.catalystaction'),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='action3',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='action3', to='items_a18.catalystaction'),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='action4',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='action4', to='items_a18.catalystaction'),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='action5',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='action5', to='items_a18.catalystaction'),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='action6',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='action6', to='items_a18.catalystaction'),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='color1',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='color2',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='color3',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='color4',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='color5',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='catalyst',
            name='color6',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]