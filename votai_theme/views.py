from elections.views import SoulMateDetailView


class MediaNarajaView(SoulMateDetailView):
    def get_information_holder(self, data={}):
        holder = super(MediaNarajaView, self).get_information_holder(data)
        print "Media Naranja ah!"
        return holder
