def validate_email(email):
    username, *domain = email.split('@')
    website, extension = domain[0].split(".")

    if not email[0].isalpha():
        raise ValueError('Username should starts with letter')

    index = 0
    while index < len(username):
        letter = username[index]
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter not in ["_", "-"]
        ):
            raise ValueError(
                "Username should contains only letters, digits, "
                "dashes or underscores"
            )
        index += 1

    index = 0
    while index < len(website):
        letter = website[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError(
                "Website should contains only letters and digits"
            )
        index += 1

    if (len(extension) != 3):
        raise ValueError(
            "Extension should have 3 digits"
        )

    return None
