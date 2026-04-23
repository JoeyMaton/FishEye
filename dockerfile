FROM nginx:alpine

# Nettoie le dossier par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copie tout ton projet (html, css, js, images…)
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]