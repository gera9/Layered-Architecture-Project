from pymongo import MongoClient
import sys
import requests


def connect_db():
    # Connecting to the database
    client = MongoClient('mongodb://DB/')

    db = client['bookshop']

    collection = db['books']

    return collection

def main():
    request = requests.get('https://www.googleapis.com/books/v1/volumes?q=search-terms?=python')

    request = request.json()['items']

    books = []

    for book in request:
        books.append(
            {
                'title': str(book['volumeInfo']['title']),
                'authors': str(book['volumeInfo']['authors']),
                'publisher': str(book['volumeInfo']['publisher']),
                'publishedDate': str(book['volumeInfo']['publishedDate']),
                'description': str(book['volumeInfo']['description']),
                'image': str(book['volumeInfo']['imageLinks']['thumbnail']),
                'previewLink': str(book['volumeInfo']['previewLink'])
            }
        )

  
    connect_db().insert_many(books)
    print('Done!')
    sys.exit()


if __name__ == '__main__':
    main()