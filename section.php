<?php require_once 'parts/header.php';
    $itemCurrent = '';

if (isset ($_GET['item'])) {
    $itemCurrent = $_GET['item'];
    $section = $items[$itemCurrent];
}
 
?>

<div class="section products" id="products">    
  <div class="section-header red">
        <span class="nav-toggle"><i class="ion-navicon"></i></span>
        
       <div class="nav">
           <ul>
           <li><a href="<?php echo $url; ?>" >home</a></li>
           <?php foreach ($items as $key_value => $item) {  
                $activeLink = '';
               if($itemCurrent == $key_value){
                   $activeLink = ' class="active"';
               }
         ?>
              <li <?php echo $activeLink; ?>><a href="section.php?<?php echo $item['link'];  ?>" ><?php echo $item['name']  ?></a></li>

           <?php } ?>
           </ul>
       </div>  
    </div>
</div>    
 
 
<div class="section thumbs-section-padding" id="<?php echo $item['name']  ?>">

<div class="container">
 
<div class="hidden-xs hidden-sm visible-md visible-lg">
    <div class="row">
      <?php foreach($section['products'] as $product) { ?>
          <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="item">
                <a href="<?php echo $product['link']; ?>" class="portfolio-link" target="_blank">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                       comandă produsul
                    </div>
                </div>
                <img src="<?php echo $url; ?>images/<?php echo $product['image']; ?>"  class="img-responsive center-block" alt="">
                </a>

                <div class="details">
                    <a href="<?php echo $product['link']; ?>" target="_blank">
                        <?php echo $product['title']; ?><span class="price"><?php echo $product['price']; ?></span>
                    </a>
                </div>
             </div>

        </div>

       <?php } ?>
   </div>
</div>
    
<div class="hidden-md hidden-lg">
    <div id="products-slider" class="owl-carousel">
        <?php foreach($section['products'] as $product) { ?>
             <div class="item">
                <a href="<?php echo $product['link']; ?>" class="portfolio-link" target="_blank">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                       comandă produsul
                    </div>
                </div>
                <img src="<?php echo $url; ?>images/<?php echo $product['image']; ?>"  class="img-responsive center-block" alt="">
                </a>

                <div class="details">
                    <a href="<?php echo $product['link']; ?>" target="_blank">
                        <?php echo $product['title']; ?><span class="price"><?php echo $product['price']; ?></span>
                    </a>
                </div>
             </div>
         <?php } ?>
    </div>
</div>    
</div>
    
</div>

<?php 
require_once 'parts/articles.php'; 
require_once 'parts/footer.php'; 
?>