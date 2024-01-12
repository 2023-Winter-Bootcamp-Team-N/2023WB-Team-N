from django.urls import path
from .views import SubscribeAPIView, SubscribeCancelAPIView, SummarySaveAPIView, MembersAPIView, SummaryAPIView

urlpatterns = [
    path('subscribe', SubscribeAPIView.as_view()),
    # path('unscribe', SubscribeCancelAPIView.as_view()),
]
