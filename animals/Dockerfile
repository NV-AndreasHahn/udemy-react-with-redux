FROM registry.access.redhat.com/ubi7/nginx-120

COPY ./build .

# Set the correct permission for prerender cache

EXPOSE 8080

ENV PORT 8080
CMD nginx -g "daemon off;"