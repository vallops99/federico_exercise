from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings


import requests


@api_view(['GET'])
def get_universities(request):
    country = request.GET.get('country', '')
    response = requests.get(settings.API, params={ 'country': country })

    if (response.status_code == 200):
        return Response(response.json())

    return Response('Something bad happened', status=status.HTTP_400_BAD_REQUEST)
