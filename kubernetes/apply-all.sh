# chmod +x apply-all.sh

kubectl apply -f config-map.yaml
kubectl apply -f client-api-service.yaml
kubectl apply -f token-api-service.yaml
kubectl apply -f client-api-deployment.yaml
kubectl apply -f token-api-deployment.yaml