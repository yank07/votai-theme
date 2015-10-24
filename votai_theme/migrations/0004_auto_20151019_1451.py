# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('votai_theme', '0003_extrainfotopic'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Topic',
        ),
        migrations.CreateModel(
            name='YQSTopic',
            fields=[
            ],
            options={
                'proxy': True,
            },
            bases=('elections.topic',),
        ),
    ]
