from slugify import slugify
import csv

# Usually slugs have to be unique, but I made the existing unique list optional
# to provide anyway.
def slug_me(item, existing_slugs=None):
    item = slugify(item.replace('+', '-plus'))
    if existing_slugs:
        num = 2
        if existing_slugs.filter(slug=item).exists():
            item2 = item + "-" + str(num)
            while existing_slugs.filter(slug=item2).exists():
                num = num + 1
                item2 = item + "-" + str(num)
            item = item2
    return item


def import_generic(function, index=1, **kwargs):
    with open('scripts/data.txt', newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile, delimiter='\t')
        for row in reader:
            function(row, index, **kwargs)
            index = index + 1