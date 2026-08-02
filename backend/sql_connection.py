import mysql.connector

__cnx = None

def get_sql_connection():
    global __cnx

    if __cnx is None:
        __cnx = mysql.connector.connect(
            host="altaria.proxy.rlwy.net",
            port=24623,
            user="root",
            password="XCWJvafOwzTvIXYlTUpodokiuCNsklGV",
            database="railway"
        )

    return __cnx