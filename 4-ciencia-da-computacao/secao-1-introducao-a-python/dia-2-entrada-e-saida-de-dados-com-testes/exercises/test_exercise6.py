import pytest
from exercise6 import validate_email

mock_username_with_letters = "lucassiqueira@bb.com"
mock_username_with_letters_numbers = "lucassiqueira1@bb.com"
mock_username_with_letters_numbers_dashes = "lucassiqueira-1@bb.com"
mock_username_letters_numbers_dashes_underscore = "lucas_siqueira-1@bb.com"
mock_incorrect_usermail = "lucas$iqueira@bb.com"
mock_incorrect_usermail_initial = "1ucas123@bb.com"
mock_incorrect_website = "lucas@b-b.com"
mock_incorrect_extension = "lucas@bb.co"


def test_validate_correct_email_with_letters():
    'Verifica se o retorno é adequado com um email dentro dos padrões'
    assert validate_email(mock_username_with_letters) is None


def test_validate_correct_email_with_letters_numbers():
    'Verifica se o retorno é adequado com um email dentro dos padrões'
    assert validate_email(mock_username_with_letters_numbers) is None


def test_validate_correct_email_with_letters_numbers_dash():
    'Verifica se o retorno é adequado com um email dentro dos padrões'
    assert validate_email(mock_username_with_letters_numbers_dashes) is None


def test_validate_correct_email_with_letters_numbers_dash_and_underscore():
    'Verifica se o retorno é adequado com um email dentro dos padrões'
    assert validate_email(
        mock_username_letters_numbers_dashes_underscore
    ) is None


def test_validate_wrong_username():
    "Verifica o retorno para email com username que não inicia com letra"
    with pytest.raises(ValueError):
        validate_email(mock_incorrect_usermail)


def test_validate_wrong_username_initial():
    "Verifica o retorno para email com username que não inicia com letra"
    with pytest.raises(ValueError):
        validate_email(mock_incorrect_usermail_initial)


def test_validate_correct_website():
    "Verifica se o retorno é adequado para um website correto"
    assert validate_email(mock_username_with_letters) is None


def test_validate_wrong_website():
    "Verifica se o retorno é adequado para um website incorreto"
    with pytest.raises(ValueError):
        validate_email(mock_incorrect_website)


def test_validate_correct_extension_length():
    "Verifica se o retorno é adequado para uma extensão correta"
    assert validate_email(mock_username_with_letters) is None


def test_validate_incorrect_extension_length():
    "Verifica se o retorno é adequado para uma extensão incorreta"
    with pytest.raises(ValueError):
        validate_email(mock_incorrect_extension)
