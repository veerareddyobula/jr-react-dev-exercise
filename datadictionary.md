# Data Dictionary

## Datasets

`items.json` - A JSON file containing a list of items

`options.json` - A JSON file containing an object mapping `item_id`'s to a list of their customization options.


## Schema

### Items
All available items are listed in `items.json`. Each element of this list has this
schema:

```{json}
{
    "item_id": "str, a unique id",
    "name": "str, the name of the item",
    "description": "str, the item description",
    "price": {
        "base_unit": "int, the price of the item in cents",
        "iso_4217": "str, the ISO 4217 currency code",
        "exponent": "int, used to convert base_unit back into dollars"
    },
    "picture_url": "str, url of image",
    "fulfillment_seconds": "int, how long it takes to prepare the item",
}
```

### Options
Item customization is implemented using `option groups` and `options`. Option groups
define a related group of options such as `drink size`, `sauces`, and `toppings`. 

Each `item_id` maps to a list that contains elements with the following schema:

```{json}
[
    {
        "section_name": "str, the name of the option group",
        "choices": [
            {
                "name": "str, the name of an option",
                "price": {
                    "base_unit": "int, the price of an option in cents",
                    "iso_4217": "str, ISO-4217 currency code",
                    "exponent": "int, digits to the right of the decimal"
                }
            },
            ...
        ],
        "uitype": "str, selection type (see below)",
        "required": "bool, whether a selection is required"
    }
    ...
]
```


#### uitype
This field defines the selection type of a group of options:
- `RADIO`: one, and only one, option can be selected from the group
- `CHECKBOX`: multiple options can be selected from the group
- `RADIO_QTY`: similar to `RADIO` but the selected option also requires a quantity


## Legal Things
-  The datasets we provide are free to use and are distributed under the [GNU General Public License v3](https://choosealicense.com/licenses/gpl-3.0/)

- The *images* provided through the datasets are distributed under the [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) license. **They cannot be used for commercial purposes**

