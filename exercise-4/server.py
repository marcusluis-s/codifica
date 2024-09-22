import http.server
import socketserver
import logging

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        super().end_headers()

    def log_message(self, format, *args):
        logging.info("%s - - [%s] %s" %
                     (self.client_address[0],
                      self.log_date_time_string(),
                      format % args))

    def handle(self):
        try:
            super().handle()
        except BrokenPipeError:
            logging.warning("Conexão fechada pelo cliente.")

PORT = 8000
logging.basicConfig(level=logging.INFO)

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    logging.info("Servidor rodando na porta %d", PORT)
    httpd.serve_forever()

