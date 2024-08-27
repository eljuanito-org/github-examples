export GH_USERNAME=$(echo 'elG2024' | tr '[:upper:]' '[:lower:]')
export GH_TOKEN='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'
export GH_IMAGE_NAME='hello-world'
export GH_VER='1.0.0'
echo $GH_TOKEN | docker login ghcr.io -u $GH_USERNAME --password-stdin
docker tag hello-world:latest ghcr.io/$GH_USERNAME/hello-world:1.0.0
docker push ghcr.io/$GH_USERNAME/hello-world:1.0.0

LABEL org.opencontainers.image.source https://github.com/OWNER/REPO