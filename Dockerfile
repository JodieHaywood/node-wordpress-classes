FROM lingz/node-flow
MAINTAINER Lingliang Zhang <lingliangz@gmail.com>

ADD . /srv/node-wordpress-classes

CMD /sbin/my_init -- bash -l

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
