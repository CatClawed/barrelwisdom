# Generated by Django 3.2.9 on 2021-11-24 03:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fragments_brsl', '0003_auto_20211124_0119'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='slugname',
        ),
        migrations.AlterField(
            model_name='event',
            name='character',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='fragments_brsl.character'),
        ),
        migrations.AlterField(
            model_name='event',
            name='index',
            field=models.IntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='location',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='fragments_brsl.schoollocations'),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='actTag0',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='actTag1',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='index',
            field=models.IntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='max1_0',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='max1_1',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='max2_0',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='min1_0',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='min1_1',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='min2_0',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]