# newDjangoApp/proxy_middleware.py
import requests
from django.http import HttpResponse

class ProxyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/static/'):
            try:
                response = requests.get(f'http://localhost:3000{request.path}')
                return HttpResponse(response.content, status=response.status_code)
            except requests.ConnectionError:
                pass
        return self.get_response(request)
