<?php require_once 'parts/header.php'; ?>

<div class="container-fluid no-padding">

 <div class="section-header red">
    Alege cadoul perfect pentru cei dragi
</div>

</div>
   
<div class="section thumbs-section-padding">
 <div class="container">
  
    <div class="row">
     
      <?php foreach ($items as $section => $item) {  ?>
       
        <div class="col-xs-6 col-md-3" id="<?php echo $item["name"]; ?>">
            <div class="thumb">
              <a href="section.php?item=<?php echo $section; ?>">
                <img src="<?php echo $url; ?>images/<?php echo $item["picture"];?>" class="img-responsive center-block">
              </a>
            </div>
        </div>
        
        <?php }  ?>
   </div>   
</div>
    
</div>
    
<?php
require_once 'parts/sliding-image.php'; 
require_once 'parts/articles.php'; 
require_once 'parts/footer.php';
?>


