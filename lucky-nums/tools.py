def validate_json(request_json):
    """Validate the json data sent over from the client"""
    errors = {'name':[],'email':[],'year':[],'color':[]}

    empty_errors = set()

    #validations for name
    name = request_json.get('name')
    if name=='':
        errors['name'].append("Input Is Required")

    #validations for email
    email = request_json.get('email')
    if email=='':
        errors['email'].append("Input Is Required")


    #validations for year
    year = request_json.get('year')
    if year=='':
        errors['year'].append("Input Is Required")

    if int(year if year!="" else 0)<1900 or int(year)>2000:
        errors['year'].append("Input should be between 1900 and 2000")

    #validations for color
    color = request_json.get('color')
    if color=='':
        errors['color'].append("Input Is Required")

    if color!='red' and color!='green' and color!='orange' and color!='blue':
        errors['color'].append("Input should be red,green,orange,or blue")

    for val in errors:
        if len(errors[val])<1:
            empty_errors.add(val)

    for val in empty_errors:
        del errors[val]

    if len(errors)>0:
        return errors

    return True

