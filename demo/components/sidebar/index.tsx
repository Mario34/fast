import Footer from '@/demo/components/footer';
import { useRouter, RouterLink, useRoute } from 'vue-router';
import './index.scss';

export interface SubItem {
  title: string,
  name: string,
}

export interface SidebarConfigItem {
  title: string,
  items: SubItem[]
}

export interface SidebarProps {
  /**
   * Sidebar 配置
  */
  config: SidebarConfigItem[]
}

const Sidebar = (props: SidebarProps) => {
  const { config } = props;
  const router = useRouter();
  const route = useRoute();

  return (
    <div class='sidebar __scroll-box'>
      <div class='sidebar__group'>
        {
          config.map((group) => (
            <>
              <div class='sidebar__group-title'>
                {group.title}
              </div>
              {
                group.items.map((item) => (
                  <RouterLink
                    custom
                    key={item.title}
                    to={{ name: item.name }}
                  >
                    <div
                      class={{
                        'sidebar__group-item': true,
                        'sidebar__group-item--active': item.name === route.name,
                      }}
                      onClick={() => {
                        router.push({ name: item.name });
                      }}
                    >
                      {item.title}
                    </div>
                  </RouterLink>
                ))
              }
            </>
          ))
        }
      </div>
      <Footer class='sidebar__footer' />
    </div>
  );
};

export default Sidebar;
